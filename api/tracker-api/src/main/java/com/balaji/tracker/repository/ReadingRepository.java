package com.balaji.tracker.repository;

import java.util.List;
import com.balaji.tracker.entity.Reading;

public interface ReadingRepository {
    List<Reading> findAll();

    Reading findOne(String readingId);

    List<Reading> findReadingsFromVehicle(String vin);

    Reading create(Reading reading);

    void delete(Reading reading);
}
