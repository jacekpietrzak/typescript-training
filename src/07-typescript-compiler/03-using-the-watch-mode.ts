/**
 * 03-using-the-watch-mode
 * - in our previous lesson we initialised our TS project using tsc command.
 * - wherever you have a tsconfig.json file in the directory TS treats this directory as a root of the project. In such a case we dont need to point to a specific file in order to compile a specific TS file to JS
 * - to compile a file we were using a command tsc filename.ts
 * - but with a tsconfig file TS will automaticaly find all TS files and compile them to JS files for us.
 * * we can run a "tsc" command and TS will compile all TS files in the root directory.
 * - tsc command can be run with a flag
 * * tsc --watch: keeps watching TS files for changes in the root directory and automaticaly compiles those files to JS files
 * * watch mode also shows you any TS errors
 * * you can terminate watch mode by hitting ztr + c
 * - there are many other commands that you can use. You can find them all in the help file. To acces help  file:
 * * tsc --help
 */
