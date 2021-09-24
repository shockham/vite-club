DCR := docker-compose run --rm
NPM := npm
SERVICE := app

all: dev

init:
	$(DCR) $(SERVICE) $(NPM) install

dev:
	docker-compose up $(SERVICE)

test: unit-test lint

unit-test:
	$(DCR) $(SERVICE) $(NPM) test

lint:
	$(DCR) $(SERVICE) $(NPM) run lint

update-deps:
	$(DCR) $(SERVICE) $(NPM) update
