#!/usr/bin/env groovy

@Library('omni-ib-infra-java-jenkins-library@dev')_

import groovy.transform.Field
import br.com.omni.ib.pipeline.Pipeline
import br.com.omni.ib.pipeline.PipeFactory
import br.com.omni.ib.pipeline.FrontRuntime
import static br.com.omni.ib.pipeline.PipeType.ANGULAR_DOCKER_DEV
import static br.com.omni.ib.pipeline.FrontRuntime.ANGULAR

@Field def appName = 'omni-ib-offer-account-front'
@Field def FrontRuntime frontRuntime = ANGULAR
@Field def gitUrl = 'https://bitbucket.org/omnifinanceira/omni-ib-offer-account-front.git'

Pipeline pipe = PipeFactory.create(ANGULAR_DOCKER_DEV, this)
pipe.deploy()
