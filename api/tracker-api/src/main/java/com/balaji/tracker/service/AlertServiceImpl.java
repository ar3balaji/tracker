package com.balaji.tracker.service;

import com.balaji.tracker.entity.Alert;
import com.balaji.tracker.repository.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class AlertServiceImpl implements AlertService {
    @Autowired
    private AlertRepository alertRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Alert> findAll() {
        return alertRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public List<Alert> findAlertsFromVehicle(String vin) { return alertRepository.findAlertsFromVehicle(vin); }
}
