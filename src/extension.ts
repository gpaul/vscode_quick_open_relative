import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('quickOpenRelative.quickOpenRelative', () => {
		let editor = vscode.window.activeTextEditor;
		if (editor !== undefined) {
			var currentlyOpenTabfilePath = editor.document.fileName;
			var currentlyOpenFilename = path.basename(currentlyOpenTabfilePath);
			var relativePath = currentlyOpenTabfilePath.replace(vscode.workspace.rootPath + path.sep, "");
			var relativePathDir = relativePath.replace(currentlyOpenFilename, "");
			vscode.commands.executeCommand('workbench.action.quickOpen', relativePathDir);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
