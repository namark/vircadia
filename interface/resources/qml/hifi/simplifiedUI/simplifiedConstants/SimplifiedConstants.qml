//
//  SimplifiedConstants.qml
//
//  Created by Zach Fox on 2019-05-02
//  Copyright 2019 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import QtQuick 2.10
QtObject {
    readonly property QtObject colors: QtObject {
        readonly property QtObject text: QtObject {
            readonly property color almostWhite: "#FAFAFA"
            readonly property color lightGrey: "#CCCCCC"
            readonly property color darkGrey: "#8F8F8F"
            readonly property color white: "#FFFFFF"
            readonly property color lightBlue: "#00B4EF"
            readonly property color lightBlueHover: "#3dcfff"
        }

        readonly property QtObject controls: QtObject {
            readonly property QtObject radioButton: QtObject {
                readonly property QtObject checked: QtObject {
                    readonly property color startColor: "#7d7d7d"
                    readonly property color checkboxFinish: "#6b6a6b"
                }
                readonly property QtObject unchecked: QtObject {
                    readonly property color startColor: "#7d7d7d"
                    readonly property color checkboxFinish: "#6b6a6b"
                }
            }
            readonly property QtObject slider: QtObject {
                readonly property QtObject background: QtObject {
                    readonly property color empty: "#252525"
                    readonly property QtObject filled: QtObject {
                        readonly property color start: "#0093C5"
                        readonly property color finish: "#00B4EF"
                    }
                }
                readonly property QtObject handle: QtObject {
                    readonly property color border: "#000000"
                    readonly property QtObject normal: QtObject {
                        readonly property color start: "#828282"
                        readonly property color finish: "#6A6A6A"
                    }
                    readonly property QtObject pressed: QtObject {
                        readonly property color start: "#6A6A6A"
                        readonly property color finish: "#828282"
                    }
                }
            }
            readonly property QtObject simplifiedSwitch: QtObject {
                readonly property QtObject background: QtObject {
                    readonly property color off: "#252525"
                    readonly property color hover: "#00b4ef"
                    readonly property color pressed: "#ffffff"
                    readonly property color on: "#ffffff"
                }
                readonly property QtObject handle: QtObject {
                    readonly property color off: "#6A6A6A"
                    readonly property color hover: "#00b4ef"
                    readonly property color pressed: "#0093C5"
                    readonly property color on: "#0093C5"
                }
                readonly property QtObject text: QtObject {
                    readonly property color off: "#8F8F8F"
                    readonly property color on: "#ffffff"
                }
            }
            readonly property QtObject button: QtObject {
                readonly property QtObject background: QtObject {
                    readonly property color disabled: "#191919"
                    readonly property color enabled: "#191919"
                    readonly property color hover: "#00B4EF"
                    readonly property color active: "#00B4EF"
                }
                readonly property QtObject border: QtObject {
                    readonly property color disabled: "#8F8F8F"
                    readonly property color enabled: "#FFFFFF"
                    readonly property color hover: "#FFFFFF"
                    readonly property color active: "#FFFFFF"
                }
                readonly property QtObject text: QtObject {
                    readonly property color disabled: "#8F8F8F"
                    readonly property color enabled: "#FFFFFF"
                }
            }
            readonly property QtObject outputVolumeButton: QtObject {
                readonly property QtObject text: QtObject {
                    readonly property color muted: "#b20012"
                    readonly property color noisy: "#FFFFFF"
                }
            }
            readonly property QtObject inputVolumeButton: QtObject {
                readonly property QtObject text: QtObject {
                    readonly property color muted: "#b20012"
                    readonly property color noisy: "#FFFFFF"
                }
            }
        }

        readonly property color darkSeparator: "#595959"
        readonly property color darkBackground: "#1A1A1A"
        readonly property color darkBackgroundHighlight: "#575757"
        readonly property color highlightOnDark: Qt.rgba(1, 1, 1, 0.2)
        readonly property color white: "#FFFFFF"
    }

    readonly property QtObject glyphs: QtObject {
        readonly property string gear: "@"
        readonly property string editPencil: "\ue00d"
        readonly property string playback_play: "\ue01d"
        readonly property string stop_square: "\ue01e"
        readonly property string hmd: "b"
        readonly property string screen: "c"
        readonly property string vol_0: "\ue00e"
        readonly property string vol_1: "\ue00f"
        readonly property string vol_2: "\ue010"
        readonly property string vol_3: "\ue011"
        readonly property string vol_4: "\ue012"
        readonly property string vol_x_0: "\ue013"
        readonly property string vol_x_1: "\ue014"
        readonly property string vol_x_2: "\ue015"
        readonly property string vol_x_3: "\ue016"
        readonly property string vol_x_4: "\ue017"
    }

    readonly property QtObject margins: QtObject {
        readonly property QtObject controls: QtObject {
            readonly property QtObject radioButton: QtObject {
                readonly property int labelLeftMargin: 6
            }
            readonly property QtObject simplifiedSwitch: QtObject {
                readonly property int handleMargins: 2
            }
        }

        readonly property QtObject settings: QtObject {
            property real subtitleTopMargin: 2
            property real settingsGroupTopMargin: 10
            property real spacingBetweenSettings: 24
        }
    }

    readonly property QtObject sizes: QtObject {
        readonly property QtObject controls: QtObject {
            readonly property QtObject slider: QtObject {
                readonly property int height: 14
                readonly property int labelTextSize: 14
                readonly property int backgroundHeight: 8
            }
            readonly property QtObject simplifiedSwitch: QtObject {
                readonly property int switchBackgroundHeight: 18
                readonly property int switchBackgroundWidth: 47
                readonly property int labelTextSize: 14
                readonly property int labelGlyphSize: 32
            }
            readonly property QtObject button: QtObject {
                readonly property int borderWidth: 1
                readonly property int textPadding: 16
                readonly property int width: 160
                readonly property int height: 32
                readonly property int textSize: 14
            }
        }
    }
}
