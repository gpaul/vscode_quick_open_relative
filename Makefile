generate:
	docker run -ti -v `pwd`:/work -w /work -u `stat -c "%u:%g" .` vscode_open_file_relative yo code

