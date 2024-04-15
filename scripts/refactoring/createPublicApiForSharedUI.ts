import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src\\**\\*.ts');
project.addSourceFilesAtPaths('src\\**\\*.tsx');

const files = project.getSourceFiles();
const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];

// const sharedUiDirectory = project.getDirectory(path.resolve(__dirname, '..', '..', 'src'));
// const componentsDirs = sharedUiDirectory?.getDirectories();
//
// componentsDirs?.forEach((directory) => {
//     const indexFilePath = `${directory.getPath()}/index.ts`;
//     const indexFile = directory.getSourceFile(indexFilePath);
//     if (!indexFile?.getBaseName()) {
//         const sourceCode = `export * from './${directory.getBaseName()}'`;
//         directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
//     }
// });

const isAbsolute = (value: string) => {
    if (layers.some((layer) => value.startsWith(layer))) {
        return true;
    }
    return false;
};

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((el) => {
        const value = el.getModuleSpecifierValue().replace('@/', '');

        const segments = value.split('/');
        const isShared = segments[0] === 'shared'
        const isUI = segments[1] === 'ui'
        if (isAbsolute(value) && isShared && isUI) {
            const result = value.split('/').slice(0, 3).join('/')
            el.setModuleSpecifier(`@/${result}`)
        }
    });
});

project.save();
