TESTS = test/*.test.js

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--reporter spec \
		$(TESTS)
		
init: 
	chmod 755 ./data

.PHONY: test init