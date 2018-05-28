import * as vscode from 'vscode'

export class PythonHoverProvider implements vscode.HoverProvider {
    public provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        if (position.line.toString().startsWith("self")) {
            return new vscode.Hover('Hehe, a Hover');
        }
    }
}