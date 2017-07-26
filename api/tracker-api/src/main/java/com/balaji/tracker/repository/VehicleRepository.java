package com.balaji.tracker.repository;

import com.balaji.tracker.entity.Vehicle;
import com.balaji.tracker.pojo.VehicleResult;

import java.util.List;

public interface VehicleRepository {
    List<VehicleResult> findAll(String sortParam, int total);

    Vehicle findOne(String vin);

    VehicleResult findVehicleResult(String vin);

    Vehicle create(Vehicle veh);

    Vehicle update(Vehicle veh);

    void delete(Vehicle veh);
}
