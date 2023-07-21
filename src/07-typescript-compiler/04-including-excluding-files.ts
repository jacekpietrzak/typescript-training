/**
 * 04-including-excluding-files
 * - we are gonna look on options that gives us tsconfig file. Theese options affect how ts behaves
 * - we have a lot of options which in many cases you dont need to change.
 */

/**
 * Exclude
 * - generated file with tsc --init does not include "exclude" option
 * * exclude is an array that escludes files that you dont want TS to compile in your project root. You can pass a path that you want to exclude.
 * * * "exclude":["app2.ts"]
 * * we can also exclude directories - node_modules is excluded by default by TS so we dont need to do this. But if we add exclude option in ts file we need to add node_modules because this exclude ovveride default one.
 * * * "exclude":["node_modules"]
 * you can use wildcards (*.filetype, ** / *.filetype)
 */

/**
 * Include
 * - As exclude we can add include. Include is an array of values with directories.
 * - once you add this property, TS will include only those files and directories that we have mentioned in include array
 * - it works very similary as exclude
 * - for instance if we want to compile files only in src directory we can do that:
 * * - "include": ["src"]
 * - you can use wildcards here as well.
 *
 * - NOTHING that is not included will not be taken in compilation process.
 */

/**
 * TS treats this as INCLUDE - EXCLUDE
 */
