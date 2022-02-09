// To move slot TranslateY(60px)
// Needs to include scale e.g. transform: scale(2.3) translateY(60px);
// 
//      Slot 1                  Slot 2                  Slot 3
//      1 Github    120px       1 HTML5     120px       1 Android   120px
//      2 HTML5     60px        2 Github    60px        2 Ruby      60px
//      3 React     0px         3 React     0px         3 React     0px
//      4 Ruby      -60px       4 Android   -60px       4 HTML5    -60px
//      5 Android   -120px      5 Ruby      -120px      5 Github    -120px
//
//  Matches: 
// 
//  1, 2 & 5 = Github   100 points
//  5, 4 & 1 = Android  200 points
//  2, 1 & 4 = HTML5    300 points
//  4, 5 & 2 = Ruby     400 points
//  3, 3 & 3 = React    500 points

