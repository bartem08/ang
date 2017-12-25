package com.ang

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import org.apache.tomcat.jdbc.pool.DataSource

@Secured('ROLE_ADMIN')
class DataSourceController {

    DataSourceService dataSourceService

    def getAllDataSources() {

        def dataSources = grailsApplication.mainContext.getBeansOfType(DataSource).collect {
            it.key
        }

        render dataSources as JSON
    }

    def getDataSource(String name) {

        DataSource dataSource = grailsApplication.mainContext.getBean(name, DataSource)

        render dataSourceService.getPropertiesMap(dataSource.poolProperties) as JSON
    }

    def updateDataSource(String name) {

        DataSource dataSource = grailsApplication.mainContext.getBean(name, DataSource)

        dataSourceService.updateDataSource(dataSource, params)

        render dataSourceService.getPropertiesMap(dataSource.poolProperties) as JSON
    }

    def deleteDataSource(String name) {

        dataSourceService.deleteDataSource(name)

        render [:] as JSON
    }

    def createDataSource() {

        dataSourceService.createDataSource(params)

        render [:] as JSON
    }
}
