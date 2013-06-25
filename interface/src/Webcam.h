//
//  Webcam.h
//  interface
//
//  Created by Andrzej Kapolka on 6/17/13.
//  Copyright (c) 2013 High Fidelity, Inc. All rights reserved.
//

#ifndef __interface__Webcam__
#define __interface__Webcam__

#include <QMetaType>
#include <QObject>
#include <QThread>

#include <glm/glm.hpp>

#include <libfreenect.h>

#include <opencv2/opencv.hpp>

#include "InterfaceConfig.h"

class QImage;

struct CvCapture;

class FrameGrabber;

class Webcam : public QObject {
    Q_OBJECT
    
public:
    
    Webcam();
    ~Webcam();

    const bool isActive() const { return _active; }
    const glm::vec3& getEstimatedPosition() const { return _estimatedPosition; }
    const glm::vec3& getEstimatedRotation() const { return _estimatedRotation; }

    void reset();
    void renderPreview(int screenWidth, int screenHeight);

public slots:
    
    void setEnabled(bool enabled);
    void setFrame(const cv::Mat& image, const cv::RotatedRect& faceRect);
    
private:
    
    QThread _grabberThread;
    FrameGrabber* _grabber;
    
    bool _enabled;
    bool _active;
    int _frameWidth;
    int _frameHeight;
    GLuint _frameTextureID;
    cv::RotatedRect _faceRect;
    cv::RotatedRect _initialFaceRect;
    
    long long _startTimestamp;
    int _frameCount;
    
    long long _lastFrameTimestamp;
    
    glm::vec3 _estimatedPosition;
    glm::vec3 _estimatedRotation;
};

class FrameGrabber : public QObject {
    Q_OBJECT
    
public:
    
    FrameGrabber();
    virtual ~FrameGrabber();

public slots:
    
    void reset();
    void grabFrame();
    
private:
    
    bool init();
    void updateHSVFrame(const cv::Mat& frame);
    
    CvCapture* _capture;
    cv::CascadeClassifier _faceCascade;
    cv::Mat _hsvFrame;
    cv::Mat _mask;
    cv::SparseMat _histogram;
    cv::Mat _backProject;
    cv::Rect _searchWindow;
    
    freenect_context* _freenectContext;
    freenect_device* _freenectDevice;
};

Q_DECLARE_METATYPE(cv::Mat)
Q_DECLARE_METATYPE(cv::RotatedRect)

#endif /* defined(__interface__Webcam__) */
