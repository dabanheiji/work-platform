/* eslint-disable @typescript-eslint/no-unused-vars */
namespace API {
  interface BaseResponse {
    [key: string]: any;
  }

  /**
   * 用户
   */
  interface LoginRequest {
    username: string;
    password: string;
  }

  interface LoginResponse {
    token: string;
  }

  /**
   * 会议室
   */
  interface MeetingRoom {
    id?: number;
    name: string;
    status?: number;
    capacity: number;
    location: string;
    equipment: string;
    description: string;
    isBooked?: boolean;
    createTime?: string;
    updateTime?: string;
  }

  interface MeetingRoomBookRequest {
    name?: string;
    status?: number;
    location?: string;
  }

  interface MeetingRoomListResponse {
    list: MeetingRoom[];
    total: number;
  }

  interface AddMeetingRoomRequest {
    name: string;
    capacity: number;
    location: string;
    equipment: string;
    description: string;
  }

  interface UpdateMeetingRoomRequest extends AddMeetingRoomRequest {
    id: number;
  }

  interface DeleteMeetingRoomRequest {
    id: number;
  }
}
