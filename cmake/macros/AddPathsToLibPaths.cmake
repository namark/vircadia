# 
#  AddPathsToLibPaths.cmake
#  cmake/macros
# 
#  Copyright 2015 High Fidelity, Inc.
#  Created by Stephen Birarda on February 17, 2014
#
#  Distributed under the Apache License, Version 2.0.
#  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
# 

macro(ADD_PATHS_TO_LIB_PATHS)
  foreach(_PATH ${ARGN})
    set(_TEMP_LIB_PATHS ${LIB_PATHS})
    
    list(APPEND _TEMP_LIB_PATHS ${_PATH})
    
    list(REMOVE_DUPLICATES _TEMP_LIB_PATHS)
    
    set(LIB_PATHS ${_TEMP_LIB_PATHS} CACHE STRING FORCE)
  endforeach()
endmacro()