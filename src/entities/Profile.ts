export type TProfile = {
  id: number;
  avatarSrcLow: string;
  avatarSrcHigh: string;
  name: string;
  status: string;
  isOnline: boolean;
  isFromMobile: boolean;
};

export type TRawProfile = {
  first_name: string;
  id: number;
  last_name: string;
  online: 1 | 0;
  online_mobile: 1 | 0;
  photo_100: string;
  photo_200: string;
  status: string;
};
