FROM jenkins/jenkins:2.346.1-lts-jdk11

USER root

RUN apt-get update && \
    apt-get install -y ca-certificates curl gnupg lsb-release wget net-tools

### Installing docker-cli
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null && \
    apt-get update && \
    apt-get install -y docker-ce-cli docker-compose-plugin

### Installing aws-cli
RUN curl -O 'https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip' && \
    unzip awscli-exe-linux-aarch64.zip && \
    ./aws/install && \
    rm -rf awscli-exe-linux-aarch64.zip ./aws

### NodeJS Install
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm i -g standard-version

### Cleaning apt package
RUN apt-get clean autoclean && \
    apt-get autoremove --yes && \
    rm -rf /var/lib/apt/lists/*

USER jenkins
