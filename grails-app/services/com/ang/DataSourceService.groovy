package com.ang

import grails.spring.BeanBuilder
import org.apache.tomcat.jdbc.pool.DataSource
import org.apache.tomcat.jdbc.pool.PoolConfiguration
import org.hibernate.SessionFactory
import org.springframework.beans.factory.BeanCreationException
import org.springframework.context.ApplicationContext
import org.springframework.context.ApplicationContextAware
import org.springframework.context.support.GenericApplicationContext

class DataSourceService implements ApplicationContextAware {

    ApplicationContext applicationContext

    static transactional = false

    /**
     *
     * @param dataSource
     * @param params
     */
    void updateDataSource(DataSource dataSource, Map<String, ?> params) {
        Map<String, ?> oldProperties = getPropertiesMap(dataSource.poolProperties)

        try {
            updateDataSourceProperties(dataSource, params)

        } catch (Exception ex) {
            updateDataSourceProperties(dataSource, oldProperties)
            throw ex
        }

    }

    /**
     *
     * @param dataSource
     */
    void deleteDataSource(String name) {

        (applicationContext as GenericApplicationContext)
                .removeBeanDefinition(name)

        println 'Delete datasource'
    }

    void createDataSource(Map<String, ?> params) {
        String beanName = "dataSource_${params.name as String}"

        if (applicationContext.containsBean(beanName)) {
            throw new BeanCreationException(beanName, "A Spring bean named '$beanName' already exists")
        }

        def beanBuilder = new BeanBuilder()

        beanBuilder.beans {
            "$beanName" DataSource, {
                username        = params.username
                password        = params.password
                url             = params.url
                driverClassName = 'com.mysql.jdbc.Driver'
            }
        }
        beanBuilder.registerBeans(applicationContext)
        log.info "Added datasource Spring bean named '$beanName' of type: $DataSource.name"

    }

    Map<String, ?> getPropertiesMap(PoolConfiguration dataSource) {
        [
                username : dataSource.username,
                password : dataSource.password,
                url      : dataSource.url
        ]
    }

    private void updateDataSourceProperties(DataSource dataSource, Map<String, ?> params) {
        dataSource.with {
            close(true)
            username = params.username
            password = params.password
            url      = params.url
            createPool()
        }
    }
}
