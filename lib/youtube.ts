const API_KEY = process.env.YOUTUBE_API_KEY || '';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: string;
  channelTitle: string;
  channelId: string;
}

export interface Channel {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  subscriberCount: string;
  videoCount: string;
}

export const CHANNELS = {
  masterofsounds: 'UCcaf0hVCmmzkBTtOlvAqiDg',
  karaokemaestro: 'UCoLN3tlCTtRap7GZijo_oFQ',
  hindibollywood: 'UCPCukuO3zwEQe1kn7w-HJOQ'
};

function getUploadPlaylistId(channelId: string): string {
  return channelId.replace(/^UC/, 'UU');
}

export async function getChannelVideos(channelId: string, maxResults: number = 6): Promise<Video[]> {
  try {
    const uploadPlaylistId = getUploadPlaylistId(channelId);
    
    const videosRes = await fetch(
      `${BASE_URL}/playlistItems?part=snippet&playlistId=${uploadPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`
    );
    
    if (!videosRes.ok) {
      console.error('Failed to fetch videos:', await videosRes.text());
      throw new Error('Failed to fetch videos');
    }
    
    const videosData = await videosRes.json();
    
    if (!videosData.items || videosData.items.length === 0) {
      return [];
    }
    
    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    
    const statsRes = await fetch(
      `${BASE_URL}/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
    );
    
    const statsData = await statsRes.json();
    
    return videosData.items.map((item: any) => {
      const videoId = item.snippet.resourceId.videoId;
      const stats = statsData.items?.find((s: any) => s.id === videoId)?.statistics || {};
      
      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url || item.snippet.thumbnails.high?.url,
        publishedAt: item.snippet.publishedAt,
        viewCount: stats.viewCount || '0',
        channelTitle: item.snippet.channelTitle,
        channelId: item.snippet.channelId
      };
    });
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

export async function getChannelInfo(channelId: string): Promise<Channel | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
    );
    
    if (!res.ok) {
      console.error('Failed to fetch channel info:', await res.text());
      throw new Error('Failed to fetch channel info');
    }
    
    const data = await res.json();
    const channel = data.items?.[0];
    
    if (!channel) return null;
    
    return {
      id: channel.id,
      title: channel.snippet.title,
      description: channel.snippet.description,
      thumbnail: channel.snippet.thumbnails.medium?.url || channel.snippet.thumbnails.default?.url,
      subscriberCount: channel.statistics?.subscriberCount || '0',
      videoCount: channel.statistics?.videoCount || '0'
    };
  } catch (error) {
    console.error('Error fetching channel info:', error);
    return null;
  }
}

export function formatViewCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return count;
}

export function timeAgo(date: string): string {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + ' years ago';
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + ' months ago';
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ' days ago';
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ' hours ago';
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ' minutes ago';
  
  return 'Just now';
}
