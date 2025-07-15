# rn-tooltip-enhanced

_Simple, lightwweight and **blazing fast** react native tooltip_

<img src="./tooltipExample.gif" width='250' />

Expo App if you want to try it out: https://expo.io/@andreixoc/RNTooltipTester

Code for the Expo app is here: https://github.com/andreiCalazans/rnTooltipTester

## Install

`yarn add rn-tooltip-enhanced`

or

`npm install rn-tooltip-enhanced--save`

## Usage

```js
import { Text } from 'react-native';
import Tooltip from 'rn-tooltip-enhanced';

...

<Tooltip popover={<Text>Info here</Text>}>
  <Text>Press me</Text>
</Tooltip>
```

## Props

- [`backgroundColor`](#backgroundcolor)
- [`containerStyle`](#containerStyle)
- [`height`](#height)
- [`highlightColor`](#highlightColor)
- [`onClose`](#onClose)
- [`onOpen`](#onOpen)
- [`pointerColor`](#pointerColor)
- [`pointerStyle`](#pointerStyle)
- [`popover`](#popover)
- [`actionType`](#actionType)
- [`width`](#width)
- [`withOverlay`](#withOverlay)
- [`overlayColor`](#withOverlay)
- [`withPointer`](#withPointer)
- [`toggleWrapperProps`](#toggleWrapperProps)

---

## 📌 Note: Safe Area Insets Required for Proper Positioning

In the latest versions of React Native, the `Dimensions.get('window').height` **does not return the full screen height**. Instead, it excludes system UI elements like the status bar or the bottom navigation bar.  
This can cause **misalignment issues** for tooltips, especially those positioned at the bottom of the screen or near screen edges.

### ❗ Why This Matters

- `Dimensions.get('screen').height` gives the total screen height but doesn't account for system UI overlays.
- To **accurately align** the tooltip or arrow icon, we must subtract the **safe area insets** (top, bottom).
- These insets are device-specific and can only be accessed from the app side using `useSafeAreaInsets()`.

---

## ✅ Required Setup in Your App

To make this library work reliably across all devices, you need to provide the safe area insets manually from your app and store them using AsyncStorage.

### Add This Code to Your Initial Screen (e.g., `HomeScreen.js`):

```js
import React, { useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const saveInsets = async () => {
    try {
      await AsyncStorage.setItem(
        'useSafeAreaInsetsValue',
        JSON.stringify(insets)
      );
    } catch (e) {
      console.log('Error saving insets:', e);
    }
  };

  useEffect(() => {
    saveInsets();
  }, []);

  return (
    // Your screen JSX
  );
};


## Reference


### `backgroundColor`

sets backgroundColor of the tooltip and pointer.

|  Type  | Default |
| :----: | :-----: |
| string | #617080 |

---

### `containerStyle`

Passes style object to tooltip container

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `height`

Tooltip container height. Necessary in order to render the container in the
correct place. Pass height according to the size of the content rendered inside
the container.

|  Type  | Default |
| :----: | :-----: |
| number | string |   40    |

---

### `highlightColor`

Color to highlight the item the tooltip is surrounding.

|  Type  |   Default   |
| :----: | :---------: |
| string | transparent |

---

### `onClose`

function which gets called on closing the tooltip.

|   Type   | Default  |
| :------: | :------: |
| function | () => {} |

---

### `onOpen`

function which gets called on opening the tooltip.

|   Type   | Default  |
| :------: | :------: |
| function | () => {} |

---

### `pointerColor`

Color of tooltip pointer, it defaults to the
[`backgroundColor`](#backgroundcolor) if none is passed .

|  Type  |                Default                |
| :----: | :-----------------------------------: |
| string | [`backgroundColor`](#backgroundcolor) |

---

### `pointerStyle`

Passes style object to tooltip pointer view

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

### `popover`

Component to be rendered as the display container.

|     Type      | Default |
| :-----------: | :-----: |
| React.Element |  null   |

---

### `actionType`

Flag to determine how the tooltip reacts to presses.

|  Type   | Default |
| :-----: | :-----: |
| press or none or longPress | press |

---

### `width`

Tooltip container width. Necessary in order to render the container in the
correct place. Pass height according to the size of the content rendered inside
the container.

|  Type  | Default |
| :----: | :-----: |
| number | number |   150   |

### `withOverlay`

Flag to determine whether or not dislay overlay shadow when tooltip is open.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

### `overlayColor`

Sets backgroundColor of the overlay.

|  Type   | Default |
| :-----: | :-----: |
| string  |  rgba(250, 250, 250, 0.70)   |

### `withPointer`

Flag to determine whether or not dislay pointer.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

### `toggleWrapperProps`

Drills TouchableOpacity Props down to the TouchableOpacity wrapper that toggles the Tooltip.

|      Type      |      Default      |
| :------------: | :---------------: |
| TouchableOpacityProps | {} |



**MIT Licensed**
```
