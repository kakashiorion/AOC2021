const input = [
    '..>>v>..v>.>.>..>vv...>>v.v..v.>>v....v>>.>.>v.>..>.v.vv>v.v..v.....>v.>>..>>..v..v.>....>.vv..v.v.>.v.vv...>>>v..>v.......v.vv...>v.v>>>v.',
    '.v.v>v...vv...v.vv..vv.v.v.>.v..v>vvvvv.v...>v>vv..>>>.v>.>.>>>v..>v..>.>.v>...>v>>>v.vv>..........>>v.v.....>>..>>vv....>v...>..>>v.>>.v.v',
    'vvv.....vvv>...>>...>>v.vv..v>v.>>v.vvv>....>>>v...vvv>v.v..v.vv..vv...>>>.....>vv.....v.>v...vv..>.>.>.>vv..>.v>>>.>.>v>...vvv..vvvv..v.v>',
    '..vv>>...v..v>>>>>v>..v.v>..>v>......>vv....>v..>vv.>>v>v.....>.>v.>v.v>..vv.>.v...v...>.v...>..>...>v>v...>.>>v..vv..>...>>>..v>vv.>.>>v.v',
    '>v..>..v>.>>>.v.v.v>>vvv.>>...v..vvv>v.>>>>.>..>.>>>v>.....>..>.>.v..>.v......v>v.v...>..v....>.vv>>...v...>.v>.v.v.......>>>v>>.>.v...>...',
    '.v.>..vv..>..>.>...>>..v.v>.vvv.>>vv...vv.vvv..>..v>>.v....v..vv>vv....>...v..v>v>.>.v.>>>vvv.v.>>......>.>>....v..v.v..>v>v..v>.vv>.vvv>v>',
    '>.>..v>.v>..v.v...>>.>...>.vv.v>...v.vv..v.>>.>>vvv..>...v......>>.>v.>.>>>>.>....>v>.>..>.>....>.>.v>vvvvv.v.vv.v.>.>>.>>>.>v>.>>.v.>....>',
    'v..v>v...v>vv..v.vv...>v....>...>.v.vv....>..>vv.v..v..v...v>v>..>>>v.>..>.v>.>>v....vv>....v>.v...vvv....>>..v>....vv..vv..v.>..v...v>vv>.',
    '...>v.>>>..>>vv>.>vv..>v.v..v.>v.v>>>>.v..v...vv>..v.>>>>.v.v..v.>v>vv.v.>..v.>..vvv.v..vv..v.v..>>....>>.>..v.>>.v>>..v...>>.>.v..>v.>>v>>',
    'v..>.>>......v>>..>vv>..vv..>>.v>>>v..vv.v>.>.>.>v...v.v...v.>v>v...>..>>>>v..>.v>...v..v>>....v..>.v.>v>...v>>.>.>v..>.>v>.v>.v>vvv......v',
    '.>>>>...vv.v.vv..>vv.>>..vv.v.v....>..>.>>>....>...>.vv..v>v.v.>v>.....>.>>>>..v>>v.v...vvv>>...>..>v.v.>v.>>.>.>v.>v>v..v>>..>v.>v..v>...>',
    '.v..v...v..>.v....>.v......vv....>..>vv..>..>.v..>..vv.>.v.v.v...v.>vv.>>.v....>..v....>v.....v>.>>>.v..vvv>>v..v.....v...>vv..>>>>v.v....v',
    'v>v>....v>v.>>v.>.>..>>.v...>.vvv.v>v>.>>v.>>v>vv>>vv.>v..v.v.>v>v.>.v>...>v>>...v>>>>.vv>v.....>..v..>.....v.vv..v>v>.>>..>.>.v..vvvv>.>.v',
    '>.v..>.vv>.>.>v.>>.>v>>.>...>..v>>v.v.v.v..v.>>.>v..>.v.vv.>>>v.>vv...v>.vv..>....>v..>.v...>.v..vv...v....v>>..>v>.v.>..v.v.>.......vv.>.>',
    '>>..v..v.>>vv..v>......v>>vv.>v.v..>v.v.vvv..>>.>.v>v..v.v..v....v>v.>....>..>v>>>v>vvv>.>>.>.........v..v.v>v.v..>..vvv>v>..>.......v.>v>.',
    '.v>..v>..vv..v.>>vv>..v.>..>vv>>>v....>.v>>v..>v.v>.>v...vv..v.....>>...v>>.v......vv...>>>.>>>............v>..vv>v..>..v..>vv.>.v.v.v>vv>.',
    '.v>.v.v>>..v..>.v>.v.v.v.vv..vv.>.v..>>.v.>.v.v>.vv.>.v>.v>v....>>..vv..v..>v>.>v...>..v...v.>..v..v.>.>.v.v>...v>..v..>..v..>>>...v..vv>..',
    '...>.v>..>>>vvv.>vv.v.vv>>v.>v.....>.vv..v.v..>v>...v.v>vv..>vvv.v>.>>.vv.v....v>.>.>..>>>.v..>.v.vv..v>v>..v.>>.>.>.v.>v>v..v>>>.>>..>..vv',
    '>>v..vv.v>vvvv>>..>.v.vvv>.>>.>.>>>v.>>vv>v..v>>.>.v..vv.....vv.>...>..v>v....>v.>>.....vvv>v..>vv...v>.>v...>.v>...v....>v>v...>>>.>.>v...',
    '.vv>v>...>....>>..>v..v>>>.v.>v..>.........vv.v.>>.>>.>.vvv.vvvv>..>....v>>vvvv.>.v.v.>..>>.vv.v>....>>.......>.v>>.>.v..v.....>>.v.v...v.v',
    '..>.....v..vv.>..v>...>...v.>>vvvvv>>>...>..v.v.>.v...v.>..>...v..>v>.....>vv>.v.v.>....v>v...v..>..>vv.>..v.v.>...>.>..v>.v....>.vv>..v.>.',
    '.v.vvv.vvv..>>>.>..>v.v.v..>..>>.v..>..>vv..v>..v>.>v..vv>vvvv..v.v...v....v.v..v>..v>...vv..v.v..v.v..>v.v....v.>.>>>vv...v>..>v>v>..v.>.v',
    '>..v.v..>>>>...vv....>vv.v>.>...>.v>v...>vvv>..vv..v..vv...>>....v.v>...>>v........>>..v>.>..v.....v.v.>.v>v..>.v.v.v.vvvv....>.v.v>>v>..>.',
    'vv..>..>.v>.>>......v>>>.....v..>v>>.>.>vvvv>vvv.v.>.v>..>........>>v.>v...>.vv....v...>>..>.>v>>>..vv...vv.v.>>..v..>.......v..v.v>...>vv>',
    '..v....>.>>>.>>.>........vv..v>v>>v>..v...v>.>.>.v.>.....>.v.v.v>v..>v>v.....>..>vv...v.....>>v.>>v...>...v.>.vv>.>>.>...vv..vv.>.>>..v.>v.',
    '>v.vvv.....>>..>v...>v>...>>.v>v>>v.>v>..v..>.>v>.v.v...>.>v..v>v>>>.v..v.>..>>>......vv..v>vvvvv...v..>>.v.vv.v..>v...v>..v.vv.>v>.v>v>vvv',
    '..v>.....>...v>...>vv.>.vvv.v..v.vv.v>vv.v.>.vv.>vvvv.>..>...>..vv.>>>>...>....>>.>v>>vvv.vv.v>....vvvvv>>.>>...>...v..v..>.>>.>.v>>v......',
    '.>.v...>......>v>.v.>vvv>....v>v...v.>v..>.>v....>.v>.v.v.vv..v.>>>....vvvv....v>..>...v....>>>...v>.....vv...>>v>.>>v.>.........vvv>......',
    'vvv.vv..>v.>..v>....>......vvv.....>.....>...>..>>v>>v..v...>>..v.>v...>.>v..vv......v>>>.>>>vvv.vvvv......>v...vv>..>..>vvv....v..v.v>.>.v',
    'vvv...vv.>>..>v..>>v..v.v..v....>vv.......v...>..v.v.v....v>vv.vv>.>.>.v.>....vv.................v...v>vv>>.v..>v>...v...>v....>.>>.>>>...>',
    '.v>>......v.>..v.v.>>vv..v>vv..>>..v>v>.v>vv...>.v.>>...>v>.>>>vv>.v>>....>.v.>>......>>..v>.v>>.....v>.v>.v.v..>.>.>vv.>...>.v>.vvvv>>...v',
    '..>.vvv....>v>v>>>.>v>..v.>.v.v.>.v.>>v.>..>..v.vv.>.>>..v>>>.v>v..>>....>>>>.>.>.>vv>..>vv.v..>v.>.vv...v....v.v..>..vv>.......>.>>>v>v.>v',
    '.v.v.v......v.>..........>.........vv....v..>>..v>.>..v>..v..>.v>v>.>>v....vv.v.v>.>.>.v.>>>vvv.....vv>vv.v..v....v.>.vv.>..v.v>......v.>>>',
    '.>>...>.v.v..vvv>>>>....>.....>.>..vv>v>.v..v.v>.v..>>>v..>.vvvvv.>v>......v>v.>..v..v>..v.>vv.v........>>.........v.>.>>v...v>>>>v>v.>....',
    'v>v.vvv>v...>..>...vv...v.........v..>.v.........v.v.v..>....>.>v>v.>v>.v.v>v>.>.....>v>.v>>>>v>.>...vv.v...>>.>......>>..>>v>>>vv.v.vv>...',
    '.vv..>v.v.v.vv>...>v.v>.>>>.v....>v...>.v..vvv>..>>v.>>.>v..>vvv..v...vv>.v.>..>>....>v>>v.>.>v...>.>>.>.>.vv..>vv>..v.v.v.vvv..>vv..vv.v..',
    '>>....v.v...>...v.>.>v.....>>v>.vv.v.v>vv...>>...v........v.>.>>..>..>...v.....v>>>...>.>..>v.>.vv>...v...v.v>v.v>..>>v.vv>..>.v.v.v>>vv...',
    'v>v>vv>..v..vv.>vv..vvvvv>>>.>.>.>vvv>v.....vvvv.>v>>v...>..v.>..>.>>v>.>>.v.>.v>v.>.....v>vv>.v>vv...v.>>>..>.vvv.>>.>.>.v.vvvv......v..v.',
    '..>..>>v>>>v...v.v>.>..v......>.>..vv>...v.>>v.vv....>>.......>vvvv>>.....v......v...>...>v>>...>.>v>..v>.v..v.v.v.v>..>...v.v...v.v>v>v>>.',
    '.v.>...v.>.>>..v.>v>..>....>..>>>>>v.vv.vv>vv.>.>vv>>.v.>v>v>vv...>>.>>.>.......>v>.>v.vv.v...v..v.>...vvv...>...>>.>...v>v..v>.vv>>v..>vv.',
    '...v.v>..v.v>.vv..v>vv>>..v.vv>v>..vv>..v....>>.v..>...>.vv..>vv....>....vvv>>>...>.>>>..v>>.>.v>v.>.v.v.v>>.v.v>>v>>..vv....>v..>........>',
    '>..v..>..vv..>v..>>.v..>...vv.>>.>...vv>>vv......>v.......>...>vvv>.v.>..v...v...>.v.>vvvv..vv>vv>v.v...>v>vv>vvv.v>v.......>v>.....vv....v',
    '.>>v.v...>..>>>.>>..>>v.vv.v..v..v..v.vvv..>vv>..vv>.>>...vv.>>..>>>..>....>v>...>v>.>..>>.v.>vv>vvv..v.>..v>.vv>..v>v..>v..v..v..>......vv',
    '>.v>>v>...v..v>v>>..>..>v.v..v....>.vv.v>>..v.v.vv>>.....v.>>....>..........>v>>v......>.>.v.......>..v.>.v>v>..vv>.>.v.vvv>....>.vv..vv.>.',
    '>v.>.....>v...>..vvvv.>>>...>.....>.v..>..v..>>.v..v.>v>v...v..v....v>>..>v.>>>v.>>>v.>>.v.v>.v>>>vv.....>..v.>.>..vv..v>>v.v..>.v.>>v..v>.',
    '>v..v.>...>>>.>>.v.v..>v...vv.v..v....>v>.>.v>>v.v>.v.>vvv.v..vv>vv....>..v..>.>.......>v>v..>>....v>....v.v>>.>v.>>>>....v.v..v..v.>>..>vv',
    'v>v.vv.v>v>.vv.....v.v.>..v.vv>..vv.>v>.>v>>.v>.>>...>>.>....>..>>>.v.>.v>..v.>v>v.v>vv.>>>..>.v...vv.>.vvvv.>.....v>.>.>>.v...>v>v....>>>v',
    '>>>.>vvv>..>.>....v>vv...v>v...vv>...>.v>v>.>.v>vv>.>..>.>v>>v>........>..>v>v>...>.>.v..>....v>>v>>v.>..v.>v..vvv.v>..>>>.v>>.v>..>>.v.>.>',
    '.v.>>....>>>....>>...>...>>>vv>.v.....v>.v.>.>v>>...>.v..vv>>.v...v.vv>.>v>>>v.vvvvv>vvv.>..v>.>..>>v.>>.vv.>v>..v>>..v..v>.>>.v.>vv>.....>',
    '...vv..>vvv.>..v.v.>.>v>..>.vv..v.v>>>.v>>.v>v...>>>..v..v>vv..v>>>...v>.>.....v>v>vv..>...>.v.>.>>......vv>.>.>..v>v....>v..>v.>>v>.>v.v..',
    '>v>.>..>..>v.>>..v....v>.>.>vv..>v.v.>..v>..>..>>.>vv..>..>>..>.>v.v..vv..v..>...>.v..v..v.>vv...>..>>.>v>>.v.vv.v>....v.>>>.>>>....v>>..>.',
    'v>>.v>>..v..v>.v.v.v.....>vvvvv..>v.....v.>....>..>v.v.v....>>v.v..v.v>>.vv.v.vv.....>..vvvv.vvv>vv..>>.>v>>.vvv..>v.v>.>.v.....v>.>..v.>..',
    'v......>>v..v..v.>>...vv>...>>>.vv.>....v...>..>...>v..>>......v...>.vv..vv.....v>>vv.>vv........>.v..>v>v.vv.v.v>vvv.v.....>.v..vvv......v',
    '...vvvv.>..vv>vvv>v.vv..>v..>..>>>>.v>vv.vv....v..>v..v>...>.v.>v.v>>>v..v.vvv>.v...>>vv.>>.v..>.>.>vv.>.v>.>.>vvv....vvv.v>..vv......>>>>>',
    '.v.>....vv....>..v.>v....>>...v.v>>.v>>.......>..>>>>..>>...vv..>...v.>......v.>>vv...>.>.>...>>..v.v>>...>v.v......v.>.>vv>..v...v.v....vv',
    '....>.>>....v>>vv>......>.v....v.v.v..>v>v.>v.....v>>vv....>.>.v..>v.v>>....>>...>.vv>....>.vvv.>.v..>.........>>.v>..>>.>.vv.v..v>..v..>vv',
    'vv>.v...v.v>v..v>v>.>..v...vv.>>.>>.v...>vv.>.>>v.v..>..v..v>>...vvv..>.v.>>>vvv>..v>..>...vv>>v..>..v.v>>>...v..>v>v...v.v......>.v>.>.>..',
    '>.>v.v>.v.>.v.>>.v...>.>>......v....v...v...>vv.......v.v......>v..>..>v.vv>>....vv>.>v.vv.>..vv>>.v>v>..>vv.>vv>>.v.>v>...v>v..v.>>>>.>..v',
    '>v>>>>.>.....v.v..v..v.>>.v...>.v..>>..v..>>.>v...vvv....>.v........vv>...v>v>...>>..vv>>.>v.....vv>.v.v>v..>vv>..>.v.>>vvvv>v.v..vv..>..>v',
    '>>>.v.>v.>v.v>v..>vv>vv.v.vv>...>>v....v.v.>.>v>...>..v.>vvv..v.vv..vv..v>>>>.>vv>>..>>v....vvv>......vvv...>......v>v>v....v.v>>.>.v...vvv',
    'v.v..>v.......v.>.v....>......vv.>.>..vvv...>v>v.vv.>....v>>v.>.v>vvv..>..v....>>vv...>...>v....vv....>..>>>.>.>vv.vv.v..>.>.>>..>..vv.....',
    '.>vv>.>....v.v..v..>....>.>v>v..v.v.>>v.v>..v>v......>.v.v.v.v....>v.v>vv>.vvv>>v>.>>>......>v>.>.v>...>..>..vv>v.vvv.>....vvv..v.vvv>...>>',
    'v>v>>.v>>v>.v>v>.>>>vv>.>v>....v>...vv...>v.>>>v>>>...v>.>v.>.>.v..>v>....>.>v>v.vv>>...v>.vv.v.>v..>v>..>....vv>>>....v>>vv.>v..>>>v.v..v>',
    'v.>.>vv>.>..vv.vv..v>.........v.vvvvvv.v>.v.v.>.>>v..v.v..v>>...vv>..>.vvv.vvv..>.v..v.>v.>.>v>.v..>..v...>......v...v.v>.v..>....v>...vvvv',
    '.v.>.>v.>>>>v>>..v....>.>v..>v..v.....v>..>>vv>.>v>>>v.v>..>v>>.......>>>...>.vv>v.v...>..vv.v.....>..>>>>...>v..>...>vv.>...v>>>>.....v.>.',
    '>.v..v.v>.>vv..v.....v.>..v.v.v>..>.v>>v.vv>.....v...v...v>.v.......v.>....vv.>.>>.>v.>.>vv.>..v...>...>>..>.vv.v.>>.>.>...>.v....v...v.>>v',
    'v>.v..>.>vv..v..>>>.v>...>.vv.>.>.v..>>v.>.>.........>>....v>...v..v.v>...v..v...v....v....>..>.>.>>.>..v....vv...>....>>..vv.....v.v>..vv.',
    'v>..>v..v>.>>>>>..>.....v.>.v>>vvv..>vv>.v>....v.vv>..v.>..>>v..vv.v...>..>>..>>v>>.>.v.vv..v.v>>v>v.vv.v...vv>>.>>...v>>>..v..>..>v..v>...',
    'vv.v.>.v.v.>v.>..>>>.v..v.vvv.>>v>.vv>...vvvv.>v>>v...v.v>....>.v.>..>>..v>>vv>>.....v>v.v.vv.>vv.>..>v.>.v.>v.>.v.>..v>v..>..>>..v......v.',
    '>....>...>v>.v..v.>...>...>.v....>...>v>.>v...v.v>..v.>v......>.v.>.>v>vvv>.v.vv.....>v..>v.>.v>.>....>>.v...v..v.....>>v.v..v.v>.>..>..>.v',
    '>>>>...v>.>>.v...vv.v.vvv.vv.v>>.v>>...>>.v>>....>.>>.>..>.vv..>v....>...v>v>..>..>>>.vv.v.v.>>.vv...>.>v>>.>v......>.....>v..>....v..vv>v.',
    'v..v>vvvv..>.>v.vv.>vv..v.v>vvv>..>.>...v>.>v.v.>.>>v.>...>>v>.v>..v..>..>>v>v.vv..>.>>>.v>..v....v.>.v...>..vv>>....>v..>.v.>>.>v.>..v.vv.',
    '.>.....vv>.>v..>>..>...>>.>..v>.>.>v...v...>.>v>v...vv...v...>vv>>.v>.>.v..>..>.>>..>v.>..v...v..vv>v..vv.>.>v.>....>>..v.v>>>>.v..v.>.v..v',
    'vv..vv>.v>>..>>..>.....vv..v.>>.>....v.>vv......>>.v.>..v...>....v........>vv.v...>v..>v..v....>.v..>.>.>.>...v>.>>>v>>>>>vv..>>vvv.>..v...',
    '...>>.v>>..>.v.>>>..>.>...>..>v>>vv..>.v>..v>...vv.>v.>>.......vvv.>>vv>v>..>.v...>.>...>v.v>vvv>v...>...>..v..>.>>.>v.>v>v.v.>>vvv>vv>v...',
    '.>vv.>.>.v>>..vv.>v.>.v..v..v>>.v.>..>>v>...>>..>.vvv>..v>.v...vv..>..vv>v>.vv.>.>.>.vv.vvvv..>vv.v.v>vvv.>.v..v>v...vvv>>v.>v...>..v.vv.vv',
    '>>>vvv>.>>.v..v..v.>v.>...v......>...>vv>v..v>.>v>v...>.>v..v..v.>.>.>>v.>..v.>.>...v>>v>...v..>vvvv....v....v>v.>.v.v..v..>.>.>.v>vv.>.>..',
    '.v.>.v.vv.v>>v.>v>v....>v.v>v>.>>v...>...v.v.....vvv>...>.>.v>..v.>.vvv..>v>.>>>.>v.>..>..v.>>>>v..>v>...>>..>>.>..v..v.>>.v..>.v.>.>.>>>>.',
    '..>>vvvv>.>v.>v..>>>>.>.>....vvv..v.vv...>>>.vvv..>>v>.........vv.>vvv>v..v...v.v..>vv.v.>.>v.v>v>>v.v..v..v.....>>v.>vv..>v>..>......>...v',
    'vv>v.>v.>.vv>v.>.vv>vv.....v>>.v>..vv>.v..v>....>....v.>vvv>.v.v>>>..>vvv.>vv...>>>vvv..>.>.>v.>>v>v>....>.>..v.>>...>...>..v.v..v.....>>v.',
    '.v>>.v.>.>.v.>.>..v.>>.v...v...>.>v..>....v.v>......>....v.>...>.>>..>.>.....v.....v.v...v.>...vv.v.vv.>.>.vvvvv>.v>.>v...v.vv>>v>.>>.....>',
    '>.v>..>.>.v...v..>>.vvv.>...v>...>v.>v...>.v..>.>>.v.>.>>>..vvvvv.>.v...vv.v>>..>v.v..vv>vvv.v.>>.>>>v.v>......>.>v>v..v..>.>v.>>...>..v>..',
    'v>v.>.v.vv.vvv>.v.v.v....>v.vv>vv.v>.>>>.vvv....>..>.>.vvv.>v>.v....v>.....>>..>..>v.>>v....v>.vvv....v.>.>....>v..v.....>.v>v>>v.>.vv.....',
    '.>.>...>>..>>v>..v..v..>>vv...vvv.v......>.vv>v.>..>v.>.v......>>>>v.v...vv>.v.>.>>..>...v>>.v...>....>v.vv.v..>>>.>.v>v>.v.>...v..v>v.>...',
    '...>.>>v.v>..v...>vv....v.v>...v.vv...v.>>.v>>vv.vv.v.......vv...>v.>>.>...>.vv>.v...v>>.v......vvv>vvv>..v.v.v.>>v.>..>vv>.vvvv.>.vv.....>',
    'vv.vv..v..v>v>....v>.v>.>.>...v.>>..>.>..v..v.v>..v>v>>.....>......>v....v.>v.....>vv....v.v.>.>>v>>v.....vv...vv...>v..>...v.v.>>..>..>...',
    '>v....>.>v>.>...>..v....v.v.vvv..>.vv..>v...>..>v>....>vv..>>v>v.v..>..v......>..v.......v..>v.>..>>vv>vv>.>v..v...v>.v>..>>.>>>.>>.vv.....',
    '.>.vv.....vv....>v.v..vvv..>>>.......>vv..v..>v...>.v.>.....v.>vv.vvv>>..>v...>v>.>..v..>...>..>..v>.>..v...>.v.......v.vv...vv.>..>.>.....',
    'v.>>v..vv...>>v.vv.......>vvv.>.v.>.vv..>v..v.....v...v.v..v>..v>..>.v....>.>..vvvv.v.>..>>v..>.>>>.>.vv.v.>.v>>>>v.vv>>..>.v.v.vv.>vv..v>.',
    '>vv>..>v.v....v.>...v.v..v.v.v.v.>...>.v.....v>.vvv.v...v>vv...>v.v>vv.>.v....v>>>>vv..>v>.>..>.v.v.>....>>vv>v..v....vv>v.v>.v>>..vv...v.>',
    '..v>>>v.v.>v.vvv>...>v.v>vv..v.>v>>.v..v.v..>>...v>.>>.>v.v.vv..v>v>..v...>>>..>....>>v.>v..v.>.>..v>v.v..v>v.vvv>v>>..v>..v.>...vvv.v..>v>',
    '>>.>.>>>.vvv.vv..v>v>..v.>....>..vvv.>>..vvv..>..>.v>....vv.>>v...>..v..vv>.....>v.vvv...vv...>v.v...>>>....vv.>..>.v.....>.>.>>v>>.>..v.v>',
    '>v.vv.v>>..vv.v>...>>.v>v..>v>....v..v.>.>>>>..>v.>........>vv..v..v>..v...>.>vv>vv>>>...>...>.>>vv>v>....v.vvv.v>>v>.>..>>v.....v>v>v..v..',
    '.>.>>v.v..>.v>.>v......>>v.....>...v>vv>v.vv.>vv>.....v>v.v>.v>>.>>vv.>v..vv..>v.vvv..>..>v..>>v.>...v.v>.>v.v>>.v>..v..>.>>.v..>>..v>v..>.',
    'vv.v.v>>...v>>..>.v>....vv.......v.vv.>vv....v>v...v.>..>vv.vv>v>..>>>>.vv..>>vv>.v>v......>>>..v.....v.>>vvv.v>v..>v..v.....v...>....>vvv.',
    '.>v>>v.v>>v.vvv>.>v..>.>vv..>>.v.v.v.>..v..v..>.>v>>......>v.>.>>.v.>>..v.>...v..v>.vvv.>...>>.>.v.v.v...v>>>..vv.....vv>>>.v>...>>v.>v.>v.',
    '..>.>>.>v.>>>...>.vvvv.v..>.v.v>>vvvvv..vv>>.v>>>..>v.v.>v.>>>.>.>.>v..v>v.>vvv..vvv..v>...v.vv....vv..>.v.>.>>v>>v>>vvv..>>v.>v.>.>...v>.v',
    '.v...>..>vvv.>.>.>.v....v....>>v>.v.v.vvv...v....>>>.v..v..v.>.vv.>.>...vv...>>>.v..>>.vv>.v>..vv.v..>.>.vv.>>..v>>>>.v.vv>.>.v>..>..v>....',
    '........>v..>....v>.>v.vv...>..v....>>.v>v.>.v..>>v>vv..v>.v..>>....>.>>vv.>>>..>>v.>vvvv.>..vvv.......>..v..vvv>.>.vvv....>...v....v>v>vv>',
    '.>>.>.v.>>.....v>.>>.....v.v..>vv..>>>>>..>.>.v..v...v.v..>..>..>..>.>v.>v>v>....v..>..v>vv..v.v>>.>..>>>..v>.v.>..>.vv..>v.v.v.vv..>.>v..>',
    'v.v...v.v>v>.vv....>>..vv..v.>>>.>.>>.>.>.>....v>..>.v.>v....>.v...>...v.vvv.v>.v...vv>..vvv..v.v>..v.>..>..>.>v>vvvvv..>>...>v..>>.v.vvv.v',
    'v>...v>v..vv.v>..v.v>>.>>v...v..>>..>.>>>>.>>v.>.>.>>vv...>.vv...v>v.vv>..vv.v.v>vv.v>v..v..v........v>......vv......vv>v>v.>.>.>.v........',
    '>vvvvv>>vv..vv>vv.>v.>.v.>vv.v....>>>>..>.v>...v>....vv...v.>.....vv>>>...vv.>>..>>>>v..>>.vv>.v>v..vv..v>>>>>>>.v..v.>v.>..vv>.>>>>vv.v..>',
    '..v.>>>.>...>>..v>.v.>v..>...v>...>..>>>.>v>vvv.vv.vv.....>.>>.vv.v>vv..v..v>.>v>>...>>.>v...>...v.>v..v.>v.....>.>.v..>.vv..vvv...v..>>>.v',
    '.>.>.....>..v.v.....v>v>.vv.>.>>v.v...v>v..v>>>..>..v..v.v>.vvvv>vv.v...v.v>v.v.>.....>>....>..v..vvvv..>vvv.v.>v...>.>v..v....v......v....',
    'v.v>.>.v.....>>v.>>>>..v>.v.>.>v>v..>..>..>>v.....v..>v>.v>v..>.>.....vv.>>.>....v....>.v>.>..v.>..>.>>>..vv>.>.>.>..v....>.>v..v..v....>>.',
    'vv.....>.v.>.>.v.>..v>......>v.>>...v.>v>>..>v..>..>.v....v.>.>..>..v>>>v.....v>>>..vvvv>...>...>>..v..>...v>vv>.v...vv>v.>v>v...v..>.v...v',
    '....>>..>v>.>..>vvv..>....v......v.....v..>>>vv>v...vvv>.>>>>v.v.v........>v..>>>>.v...>.v>.....vvvv....v.>vvv>..>v>v..v..>v.>>..v>>>>..>v.',
    'v>..>>.>....>>.......>..>...v.....v.>v>.>v.v>.>.....v>v>>>....v..>..v>>vv.>vv>>.>...>v>>.>>v...>..>.>>v>>vvv..vv...v>v.v.v..v...>...v...v.v',
    '..vv.....>v.v.......>>.v>v....>.v.vv>.v.v..v>......v>>.vvv..v>>.>.>v.>v>>v>>.....>v>v>...>>>......>>.>...v>>.v>..>>vvv>...vv>..>.>..>...v.v',
    'v>v>.v.vvvv.v>>...v....>>>v..>..>>vv.>v.v.....v.....v>...v.>.>.>>.>v...v>>..>.>v.>..v.>>v.....v>>...v.v..vvv>>.v..vv.>>..>>v..>.>.>..>v>>..',
    '>.>..>.vvv>>>>..>v......v..>>v...>v>.>.v.....v>>.>v>v...v>>vv>>...v>....v>vv..v>>v.>..>.v..vv>..>v.>v.v..vv.v..v.v.v..v.v.v>>..>.>>v...v..v',
    '..>.>v..>>.v.v........v>....>v..>v>....vv.vvv.v.....v..vv.>.v.v...v..vv>.>vvv..v.>.v.>v>v.>..>>>.....v.vv...v>....>.vvv...>v.vvv..v..>vv.v.',
    '.vvvv.v..v..>vvv..>.>..>vv..>..vv..>.....v.>v.vv>.>>..v.>.>..v>.>..>v.>.>vv>>..v...v.vv.>..>...>.>>.>..vv>...v.>..vvv.v.......>.>..v>>....v',
    'v>v....>...>...>v..>v......>>.>...>...vv>vv..>>......v..v.>...>v..v.v>>>v>>...vv>.....v>>>....>.....>.......v..v>..>v.>vv.v.v>v>.....>..v.>',
    '..v.v.>>v..v>v.>..>..vvv>>v..>>>>.v..vv>.vv.vv..>.v>..vvv>>..v>vv>.>vv...>.>...v>v..v>vv>>v>>.>v>..vv>v.vv>..v..>v.>vv.>..>....v>.v.>....>.',
    'v>.v>v.vv.v.>v>vv>>.>.v......>..vvv.v.vv.>v.>...v>.>v.v>.vvv.vv..>.>....>...v.>>vvv...>>.v.v>.>.vvv....v>v..>.>.vv...>v>....vv.v....>>v>v>>',
    '>......>>v.>.>v>v.>.>>>>>.v....>>..>>vv.vv.v>..>.>>>>......vv>.v..>>..v...>.v.>>v>v.v..>>v>.>v>....v>.v>>.>..v>.>>.>v>v..v...v>..>>..>..>>.',
    '>..vvv....>..v.>..v>..vv.v.v.v.>..vv.....vv..>v..v>...>>..>....>..v>v>.v..v....v>.vv...v>>>...v>>>v>.>vvvv>.>vv.>.>..vvv...>v.v.>v>>.>>>vvv',
    '...>.>>v.v>.>v>v.vv...>.v.v.v...>.>......v...>v.......v..>.>v.>v...v..v..v>.vv>vv.vv.......v>..>....vv.vv>.v>.>v..>vv....vv.>..>v...v......',
    'vv>v.>...>>v...v>...v>..v.vvv.>...v>>v.>..>>.v.>v....v..>.......>v>.v....>..>.vv>.....>.>>.>>>..vv>v....>.v>.>>v..vv.v>>>.....>.>v...>vv>>v',
    '..v.>>>..>>v..>>v>vv.>....v.v.>.>>......>.>.v>.v>vv.v>>v>v>..vvv>.>...v..>>>.>>.>.....>......>..>v...>v....>v.....>.vvvv..v>v>vv>.>v>.>>v>.',
    'vv>v...>.....v...v>..v...v>v.>.vv>>.vv>..>>v>>..>v.v>.v..>v>>...v.>v..>>...>.v.>>...>..>.>>>.>..>.>.>v..v>......>.v.v.v.v..v.....v>...v.>.v',
    '.>.v>vv....>.>v.>.....>v>v.v>..>.v>..v..>>.>.>..>>v>...>>>vv...v..>..v..v>v.....vv.v>vvvv...........>>>.>.>>.v.vv.....>.v.v>.>.>>..>>v..>>.',
    '>.....v.>..>.v>.vv..>..>v>.>>vv...vv...>..>v>>...>..>...vvv>.>.>...>vv>v>v.>...>...>.>>v>..>>>.>>v..v..>....v.v..>.>.v..vv..>vv>>v.>..>.>.v',
    '>.>>.>>vv>..v.v....>v..>>vv>v.>>.>v>.>.v.v>>...>.......v....v....>....>vv.vv>>.>>>....>>vv>>vv...v..vv.v>.vv....>..>v.>.v>.v>.....v>...>v..',
    '...v>>....v>....v>.>>>.vvv....>..vv.v....v.>>..>..>>vvv..>v..v>>.>.v..vv>..>v.v>>v>.>..>vv>....>.v>>>.>>>..vvv..v>>v>...vvv....vv>v>v......',
    '..>......>v.>.>v.>...v.v....vvvv.v.v>v.>>....v>v..v.v.v.v..vvv>.v>vvv>>..vv..>>>>..vv>>v...>v>.v>.>vvv>v..v.v.....>v.>v.>...>.vv.v.>...>>v>',
    'v>>>..vv.>v>>..v>.v..>...>v.>..>>.......>..>.v..v.>..>.v.v>.v>....v.>.>.>..v.v..v>v..>.>..v..>..>..v....>v.>vv.>....v.........v.v.>.>..v>.>',
    '>.v>vv>....v>..>..v..v>v.vv...v..>....v>..v>>v.>>.>>.>>....v.v...v.v>..>.....>>.>v..>>>.>...>.vv>.vv.>>.>v..vv....v>....>>>.v...>>v.>v.v...',
    '..vv.v.....>...>v>.v>...v>.>.v.>.v.....>.v..v.>v.v.>v...v>...v.>.>.....>vv.>>...v...>>.vvv..>..v..>....v.>..>>v.v...>>>>v....>>>.v..>>v>.v>',
    '..vv..>.>.....>......v>.>...>>...v>.>..v.>.v....vvv.>.v>>..v>>v>..v.>.>v.v..v...v.>v.v>....v>.v.v.>>>.v>..v....>..v>...>...v>vv.v...vvvv>.v',
    'vvv...v>>>vv...>...vvvv....>>>>...>..v.v.>>..v...>>.>..>.....v..>.v..>v.>.v...v.v..v>v.vvv>>...>>>>..v.v..>>v>vv>>vv.>>....>..>.>v..>..>vv>',
    '>v>.v..vv>v>..>vv>......vv>>.>..>....>...v.>...>>>>.>.>v.v>vvv.>>v>....>.>v>.....v.>.v.v..v.>..>vvv>v.v>>.>...vv.v..>.>>vv>>v.>.>>...v>.v>>',
    '.>v.v.>>vv...>.>v>>..>>..v..>.>v..>..>.......v>v..>...>.....v..vv.>>..vv>....>>>.>v>vvvv.vv....v.>>.v>v>..>.>v.>v.>vv...........>v>>v>..>..',
    '.v>v...>...>>>..vv>>..vv.>>...>v>.>.>......vv.>.>.v>..>>..>>..>v>..vvv.v.>v>v..>..vv..v>....>>...>...vv...vvvv...>vv>.v...v>.v....>>...>>.>',
    '>.v..>.>..>>v.>.>..>.v...vvv.v.v..>....>>v>.v>.>>..>.>vv.>.v...v..v..>>>.>v..>v.v....v>v>>..>...>.v>>..>.......v>..v.>.v.....v.>..>.>.>...v'];


let inputMap = {};
for (let j = 0; j < input.length; j++) {
    for (let i = 0; i < input[j].length; i++) {
        inputMap[[i, j]] = input[j][i];
    }
}

//Part 1
function moveEast(inMap) {
    let outMap = Object.assign({}, inMap);
    let eastCount = 0;
    for (item in inMap) {
        if (inMap[item] == '>') {
            let x = parseInt(item.split(',')[0]);
            let y = parseInt(item.split(',')[1]);
            if (inMap[[x != 138 ? x + 1 : 0, y]] == '.') {
                outMap[[x != 138 ? x + 1 : 0, y]] = '>';
                outMap[[x, y]] = '.';
                eastCount += 1;
            }
        }
    }
    return [outMap, eastCount];
}

function moveSouth(inMap) {
    let outMap = Object.assign({}, inMap);
    let southCount = 0;
    for (item in inMap) {
        if (inMap[item] == 'v') {
            let x = parseInt(item.split(',')[0]);
            let y = parseInt(item.split(',')[1]);
            if (inMap[[x, y != 136 ? y + 1 : 0]] == '.') {
                outMap[[x, y != 136 ? y + 1 : 0]] = 'v';
                outMap[[x, y]] = '.';
                southCount += 1;
            }
        }
    }
    return [outMap, southCount];
}

let moveCount = -1;
let steps = 0;
while (moveCount != 0) {
    let resultEast = moveEast(inputMap);
    inputMap = Object.assign({}, resultEast[0]);
    moveCount = resultEast[1];

    let resultSouth = moveSouth(inputMap);
    inputMap = Object.assign({}, resultSouth[0]);
    moveCount += resultSouth[1];
    steps += 1;
}

console.log({ steps });

