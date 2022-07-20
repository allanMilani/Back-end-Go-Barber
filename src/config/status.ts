export const TrailStatus: {
  ACTIVE: 'ACTIVE';
  INACTIVE: 'INACTIVE';
} = { ACTIVE: 'ACTIVE', INACTIVE: 'INACTIVE' };

export type TrailStatus = typeof TrailStatus[keyof typeof TrailStatus];
