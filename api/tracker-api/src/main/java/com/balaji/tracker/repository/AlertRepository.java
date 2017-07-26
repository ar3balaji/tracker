package com.balaji.tracker.repository;

import com.balaji.tracker.entity.Alert;

import java.util.List;

public interface AlertRepository {
    List<Alert> findAll();

    List<Alert> findAlertsFromVehicle(String vin);

    Alert create(Alert alert);
}
