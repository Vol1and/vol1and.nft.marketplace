import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src\\**\\*.ts');
project.addSourceFilesAtPaths('src\\**\\*.tsx');

const files = project.getSourceFiles();
const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];

const sharedUiDirectory = project.getDirectory(path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'));
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    let indexFile = directory.getSourceFile(indexFilePath)
    if(!indexFile?.getBaseName()) {
        const sourceCode = `export * from './${directory.getBaseName()}'`
        indexFile = directory.createSourceFile(indexFilePath, sourceCode, {overwrite: true})

    }

    console.log()
});
//
// const isAbsolute = (value: string) => {
//     if (layers.some((layer) => value.startsWith(layer))) {
//         return true;
//     }
//     return false;
// };
//
// files.forEach((sourceFile) => {
//     const importDeclarations = sourceFile.getImportDeclarations();
//
//     importDeclarations.forEach((el) => {
//         const value = el.getModuleSpecifierValue();
//         if (isAbsolute(value)) {
//             el.setModuleSpecifier(`@/${value}`);
//         }
//     });
// });
//
// project.save();
