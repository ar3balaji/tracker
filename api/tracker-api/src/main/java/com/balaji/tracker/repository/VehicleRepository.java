package com.balaji.tracker.repository;

import com.balaji.tracker.entity.Vehicle;

import java.util.List;

public interface VehicleRepository {
    List<Vehicle> findAll();

    Vehicle findOne(String vin);

    Vehicle create(Vehicle veh);

    Vehicle update(Vehicle veh);

    void delete(Vehicle veh);
}
