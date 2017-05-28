package com.balaji.tracker.service;

import com.balaji.tracker.entity.Vehicle;

import java.util.List;

public interface VehicleService {
    List<Vehicle> findAll();

    Vehicle findOne(String vin);

    Vehicle create(Vehicle veh);

    Vehicle update(String id, Vehicle veh);

    void upsert(List<Vehicle> vehicles);

    void delete(String vin);
}
