TESTS = test/*.test.js

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter spec \
		$(TESTS)

init:
	chmod 777 ./data

.PHONY: test init
