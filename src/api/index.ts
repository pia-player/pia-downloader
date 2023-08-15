import { fetch } from '@tauri-apps/api/http';

const API_PREFIX = 'https://api.aipiaxi.com/';

export const getBackgroundMusics = async (id: string) => {
  const { data } = await fetch<XJ.APIResponse<{ bgm: XJ.BGM[] }>>(`${API_PREFIX}article/v1/web/${id}/detail`);
  return data?.data?.bgm;
};
