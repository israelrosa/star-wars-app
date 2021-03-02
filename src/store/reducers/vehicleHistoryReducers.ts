import {
  ADD_VEHICLE_HISTORY,
  VehicleHistoryActions,
  VehicleHistoryState,
} from '../types/vehicleTypes';

const initialState: VehicleHistoryState = {
  vehicles: [],
};

export default function historyReducers(
  state = initialState,
  action: VehicleHistoryActions,
): VehicleHistoryState {
  switch (action.type) {
    case ADD_VEHICLE_HISTORY:
      if (
        state.vehicles.findIndex((vh) => vh.name === action.vehicle.name) === -1
      ) {
        return {
          vehicles: [...state.vehicles, action.vehicle],
        };
      }
      return state;

    default:
      return state;
  }
}
