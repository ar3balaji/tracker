package com.balaji.tracker.repository;

import com.balaji.tracker.entity.Vehicle;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class VehicleRepositoryImpl implements VehicleRepository {
    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Vehicle> findAll() {
        TypedQuery<Vehicle> query = em.createNamedQuery("Vehicle.findAll", Vehicle.class);
        return query.getResultList();
    }

    @Override
    public Vehicle findOne(String vin) {
        return em.find(Vehicle.class, vin);
    }

    @Override
    public Vehicle create(Vehicle veh) {
        em.persist(veh);
        return veh;
    }

    @Override
    public Vehicle update(Vehicle veh) {
        return em.merge(veh);
    }

    @Override
    public void delete(Vehicle veh) {
        em.remove(veh);
    }
}
