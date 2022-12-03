run:
	./vendor/bin/sail up &
	./vendor/bin/sail npm install
	./vendor/bin/sail npm run dev &