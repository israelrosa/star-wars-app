import Vehicles from '../../interfaces/Vehicles';

export const ADD_VEHICLE_HISTORY = 'ADD_VEHICLE_HISTORY';
export const SHOW_ALL_VEHICLE = 'SHOW_ALL_VEHICLE';

export interface VehicleHistoryState {
  vehicles: Vehicles[];
}

interface AddVehicleHistoryAction {
  type: typeof ADD_VEHICLE_HISTORY;
  vehicle: Vehicles;
}

export type VehicleHistoryActions = AddVehicleHistoryAction;
