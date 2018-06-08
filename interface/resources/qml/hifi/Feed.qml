//
//  Feed.qml
//  qml/hifi
//
//  Displays a particular type of feed
//
//  Created by Howard Stearns on 4/18/2017
//  Copyright 2016 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import Hifi 1.0
import QtQuick 2.5
import QtGraphicalEffects 1.0
import "toolbars"
import "../styles-uit"
import "models" as HifiModels

Column {
    id: root;
    visible: !!suggestions.count;

    property int cardWidth: 212;
    property int cardHeight: 152;
    property int textPadding: 10;
    property int smallMargin: 4;
    property int messageHeight: 40;
    property int textSize: 24;
    property int textSizeSmall: 18;
    property int stackShadowNarrowing: 5;
    property int stackedCardShadowHeight: 4;
    property int labelSize: 20;

    property string protocol: '';
    property string actions: 'snapshot';
    // sendToScript doesn't get wired until after everything gets created. So we have to queue fillDestinations on nextTick.
    property string labelText: actions;
    property string filter: '';
    property var goFunction: null;
    property var http: null;

    HifiConstants { id: hifi }
    Component.onCompleted: suggestions.getFirstPage();
    HifiModels.PSFListModel {
        id: suggestions;
        http: root.http;
        property var options: [
            'include_actions=' + actions,
            'restriction=' + (Account.isLoggedIn() ? 'open,hifi' : 'open'),
            'require_online=true',
            'protocol=' + encodeURIComponent(Window.protocolSignature())
        ];
        endpoint: '/api/v1/user_stories?' + options.join('&');
        itemsPerPage: 3;
        processPage: function (data) {
            return data.user_stories.map(makeModelData);
        };
        listModelName: actions;
        listView: scroll;
        searchFilter: filter;
    }

    function resolveUrl(url) {
        return (url.indexOf('/') === 0) ? (Account.metaverseServerURL + url) : url;
    }
    function makeModelData(data) { // create a new obj from data
        // ListModel elements will only ever have those properties that are defined by the first obj that is added.
        // So here we make sure that we have all the properties we need, regardless of whether it is a place data or user story.
        var name = data.place_name,
            tags = data.tags || [data.action, data.username],
            description = data.description || "",
            thumbnail_url = data.thumbnail_url || "";
        return {
            place_name: name,
            username: data.username || "",
            path: data.path || "",
            created_at: data.created_at || data.updated_at || "",  // FIXME why aren't we getting created_at?
            action: data.action || "",
            thumbnail_url: resolveUrl(thumbnail_url),
            image_url: resolveUrl(data.details && data.details.image_url),

            metaverseId: (data.id || "").toString(), // Some are strings from server while others are numbers. Model objects require uniformity.

            tags: tags,
            description: description,
            online_users: data.details.connections || data.details.concurrency || 0,
            drillDownToPlace: false
        };
    }

    RalewayBold {
        id: label;
        text: labelText;
        color: hifi.colors.blueAccent;
        size: labelSize;
    }
    ListView {
        id: scroll;
        model: suggestions.model;
        orientation: ListView.Horizontal;
        highlightFollowsCurrentItem: false
        highlightMoveDuration: -1;
        highlightMoveVelocity: -1;
        currentIndex: -1;
        onAtXEndChanged: { if (scroll.atXEnd && !scroll.atXBeginning) { suggestions.getNextPage(); } }

        spacing: 12;
        width: parent.width;
        height: cardHeight + stackedCardShadowHeight;
        delegate: Card {
            id: card;
            width: cardWidth;
            height: cardHeight;
            goFunction: root.goFunction;
            userName: model.username;
            placeName: model.place_name;
            hifiUrl: model.place_name + model.path;
            thumbnail: model.thumbnail_url;
            imageUrl: model.image_url;
            action: model.action;
            timestamp: model.created_at;
            onlineUsers: model.online_users;
            storyId: model.metaverseId;
            drillDownToPlace: model.drillDownToPlace;

            textPadding: root.textPadding;
            smallMargin: root.smallMargin;
            messageHeight: root.messageHeight;
            textSize: root.textSize;
            textSizeSmall: root.textSizeSmall;
            stackShadowNarrowing: root.stackShadowNarrowing;
            shadowHeight: root.stackedCardShadowHeight;
            hoverThunk: function () { hovered = true }
            unhoverThunk: function () { hovered = false }
        }
    }
    /* WTF is this? 
    NumberAnimation {
        id: anim;
        target: scroll;
        property: "contentX";
        duration: 250;
    }
    function scrollToIndex(index) {
        anim.running = false;
        var pos = scroll.contentX;
        var destPos;
        scroll.positionViewAtIndex(index, ListView.Contain);
        destPos = scroll.contentX;
        anim.from = pos;
        anim.to = destPos;
        scroll.currentIndex = index;
        anim.running = true;
    }
    */
}
