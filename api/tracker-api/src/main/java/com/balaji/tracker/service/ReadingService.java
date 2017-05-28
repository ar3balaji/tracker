package com.balaji.tracker.service;

import com.balaji.tracker.entity.Reading;

import java.util.List;

public interface ReadingService {
    List<Reading> findAll();

    List<Reading> findReadingsFromVehicle(String vin);

    Reading create(Reading reading);

    void delete(String readingId);
}
