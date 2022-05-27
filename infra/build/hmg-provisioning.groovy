#!/usr/bin/env groovy

@Library('omni-ib-infra-java-jenkins-library@dev')_

import groovy.transform.Field
import br.com.omni.ib.pipeline.Pipeline
import br.com.omni.ib.pipeline.PipeFactory
import br.com.omni.ib.pipeline.JavaRuntime
import static br.com.omni.ib.pipeline.PipeType.JAVA_DOCKER_PROVISIONING_HMG
import static br.com.omni.ib.pipeline.JavaRuntime.OPENJDK_11

@Field def appName = 'omni-ib-offer-account-front'
@Field def JavaRuntime appRuntime = OPENJDK_11
@Field def gitUrl = 'https://bitbucket.org/omnifinanceira/omni-ib-offer-account-front.git'

Pipeline pipe = PipeFactory.create(JAVA_DOCKER_PROVISIONING_HMG, this)
pipe.deploy()
