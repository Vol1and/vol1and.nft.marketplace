import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src\\**\\*.ts');
project.addSourceFilesAtPaths('src\\**\\*.tsx');

const files = project.getSourceFiles();
const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
const isAbsolute = (value: string) => {
    if (layers.some((layer) => value.startsWith(layer))) {
        return true;
    }
    return false;
};

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((el) => {
        const value = el.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            el.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
