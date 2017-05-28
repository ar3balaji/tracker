package com.balaji.tracker.repository;

import com.balaji.tracker.entity.Reading;
import com.balaji.tracker.entity.Vehicle;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ReadingRepositoryImpl implements ReadingRepository {
    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Reading> findAll() {
        TypedQuery<Reading> query = em.createNamedQuery("Reading.findAll", Reading.class);
        return query.getResultList();
    }

    @Override
    public List<Reading> findReadingsFromVehicle(String vin) {
        TypedQuery<Reading> query = em.createNamedQuery("Reading.findByVin", Reading.class);
        query.setParameter("pVin", vin);
        return query.getResultList();
    }

    @Override
    public Reading findOne(String readingId) {
        return em.find(Reading.class, readingId);
    }

    @Override
    public Reading create(Reading reading) {
        em.persist(reading.getTires());
        em.persist(reading);
        return reading;
    }

    @Override
    public void delete(Reading reading) {
        em.remove(reading);
    }
}
