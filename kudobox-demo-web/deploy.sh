#!/bin/bash
cf push kudobox -p target/kudobox-demo-web-0.1.0-SNAPSHOT.jar -b https://github.com/cloudfoundry/java-buildpack.git
