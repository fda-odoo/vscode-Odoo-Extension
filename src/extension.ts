'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { DepNodeProvider } from './treeviews/server_view'
import { PythonHoverProvider } from './functionnalities/HoverTool'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Hello! Welcome in odoo Extension! If you have any remark or issue, you can contact me at fda@odoo.com');

    context.subscriptions.push(
        vscode.languages.registerHoverProvider('python', new PythonHoverProvider())
    );

    const rootPath = vscode.workspace.rootPath;
    const nodeDependenciesProvider = new DepNodeProvider(rootPath);

	vscode.window.registerTreeDataProvider('test', nodeDependenciesProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {
}