package com.balaji.tracker.service;

import com.balaji.tracker.entity.Alert;

import java.util.List;

public interface AlertService {
    List<Alert> findAll();

    List<Alert> findAlertsFromVehicle(String vin);
}
