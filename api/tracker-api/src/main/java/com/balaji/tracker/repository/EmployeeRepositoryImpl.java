package com.balaji.tracker.repository;

import com.balaji.tracker.entity.Employee;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class EmployeeRepositoryImpl implements EmployeeRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Employee> findAll() {
        TypedQuery<Employee> query = em.createNamedQuery("Employee.findAll", Employee.class);
        return query.getResultList();
    }

    @Override
    public Employee findOne(String id) {
        return em.find(Employee.class, id);
    }

    @Override
    public Employee findByEmail(String email) {
        TypedQuery<Employee> query = em.createNamedQuery("Employee.findByEmail", Employee.class);
        query.setParameter("pEmail", email);
        List<Employee> resultList = query.getResultList();

        if (resultList != null && resultList.size() == 1) {
            return resultList.get(0);
        } else {
            return null;
        }
    }

    @Override
    public Employee create(Employee emp) {
        em.persist(emp);
        return emp;
    }

    @Override
    public Employee update(Employee emp) {
        return em.merge(emp);
    }

    @Override
    public void delete(Employee emp) {
        em.remove(emp);
    }
}
