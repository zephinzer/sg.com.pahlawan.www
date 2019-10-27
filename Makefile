IMAGE_URL=zephinzer/sg-com-pahlawan-www
TIMESTAMP=$$(date +'%Y%m%d-%H%M%S')

prepare:
	@npm install

purge:
	@rm -rf ./node_modules
	@rm -rf ./build

build:
	@npm run build
	@docker build \
		--file ./Dockerfile \
		--tag $(IMAGE_URL):latest \
		.

run: build
	@docker run \
		--publish 8080:8080 \
		$(IMAGE_URL):latest

deploy:
	@npm run deploy

publish: build
	@docker tag $(IMAGE_URL):latest $(IMAGE_URL):$(TIMESTAMP)
	@docker push $(IMAGE_URL):latest
	@docker push $(IMAGE_URL):$(TIMESTAMP)
