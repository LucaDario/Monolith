// Project key
def projectKey = 'swe-monolith'

// Project name
def projectName = 'Monolith'

// Node where this job can run
def targetNode = 'master'

// Define if at the of the job should start the deploying procedure
def deployOnProduction = false

// Branch that hold the code that will go in production.
def productionBranch = 'master'

// Modules splitted from a semicolon that will be analized from sonarqube.
def analizedModules = 'client,lib'

node(targetNode) {

    checkout scm

    def scannerHome = tool 'SonarQube scanner';
    withSonarQubeEnv('Sonar zotsell') {
        sh "${scannerHome}/bin/sonar-scanner \
        -Dsonar.projectKey='${projectKey}-${env.BRANCH_NAME}' \
        -Dsonar.projectName='${projectName} [${env.BRANCH_NAME}]' \
        -Dsonar.projectVersion=1.0 \
        -Dsonar.modules='${analizedModules}' \
        -Dsonar.sources=src \
        -Dsonar.exclusions=src/test/**,src/androidTest/** \
        -Dsonar.sourceEncoding=UTF-8 \
        -Dsonar.buildbreaker.skip=false \
        -Dsonar.gitlab.project_id='${env.gitlabSourceRepoHttpUrl}' \
        -Dsonar.language=js"
    }

}
