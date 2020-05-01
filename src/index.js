import action from './icons/action'
import alert from './icons/alert'
import av from './icons/av'
import communication from './icons/communication'
import content from './icons/content'
import device from './icons/device'
import editor from './icons/editor'
import file from './icons/file'
import hardware from './icons/hardware'
import image from './icons/image'
import maps from './icons/maps'
import navigation from './icons/navigation'
import notification from './icons/notification'
import places from './icons/places'
import social from './icons/social'
import toggle from './icons/toggle'

const groups = {
    action,
    alert,
    av,
    communication,
    content,
    device,
    editor,
    file,
    hardware,
    image,
    maps,
    navigation,
    notification,
    places,
    social,
    toggle
};

const list = {
    ...action.icons,
    ...alert.icons,
    ...av.icons,
    ...communication.icons,
    ...content.icons,
    ...device.icons,
    ...editor.icons,
    ...file.icons,
    ...hardware.icons,
    ...image.icons,
    ...maps.icons,
    ...navigation.icons,
    ...notification.icons,
    ...places.icons,
    ...social.icons,
    ...toggle.icons
};

const iconGroupNames =  Object.keys(groups);

const iconNames =  Object.keys(list);

export {
    groups,
    iconGroupNames,
    iconNames
}

export default list
