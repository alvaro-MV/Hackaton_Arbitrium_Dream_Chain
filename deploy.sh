cargo stylus deploy --wasm-file ./contract.wasm -e https://sepolia-rollup.arbitrum.io/rpc \
--cargo-stylus-version 1.5.3 \
--private-key 7d316c484191cf49b45edebfc8e75c558c670fa952f45635e42cffe00691fda3 \
--no-verify > deploy_log.txt; cat deploy_log.txt | grep deployed | awk -F': ' '{print $2}' > deploy_log.txt

export CONT_ADD=$(cat deploy_log.txt)
