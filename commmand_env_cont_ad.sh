❯ sh deploy.sh; echo CONT_ADD=$(cat deploy_log.txt) > deploy_log.txt; echo '\n' >> .env; cat deploy_log.txt | sed -r "s/\x1b\[[0-9;]*m//g" >> .env

source .env; make play

