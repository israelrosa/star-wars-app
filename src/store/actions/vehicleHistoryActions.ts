import Vehicles from '../../interfaces/Vehicles';
import {
  VehicleHistoryActions,
  ADD_VEHICLE_HISTORY,
} from '../types/vehicleTypes';

export function AddVehicleHistoryAction({
  films,
  name,
  url,
  cargo_capacity,
  consumables,
  cost_in_credits,
  crew,
  length,
  manufacturer,
  max_atmosphering_speed,
  model,
  passengers,
  pilots,
  vehicle_class,
}: Vehicles): VehicleHistoryActions {
  return {
    type: ADD_VEHICLE_HISTORY,
    vehicle: {
      cargo_capacity,
      vehicle_class,
      pilots,
      passengers,
      model,
      max_atmosphering_speed,
      manufacturer,
      length,
      crew,
      cost_in_credits,
      consumables,
      url,
      name,
      films,
    },
  };
}
