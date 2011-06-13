#!/bin/bash

# for build the share-ieat project
mkdir build
rm -fr build/*
svn export src build/ieat
cd build
tar cfvz ieat.tar.gz ieat 
