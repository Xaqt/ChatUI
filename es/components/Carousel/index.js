import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { CarouselItem } from './Item';
import { setTransform, setTransition } from '../../utils/style';
import canUse from '../../utils/canUse';
var formElements = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'];
var canTouch = canUse('touch');
export var Carousel = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _props$startIndex = props.startIndex,
      startIndex = _props$startIndex === void 0 ? 0 : _props$startIndex,
      _props$draggable = props.draggable,
      draggable = _props$draggable === void 0 ? true : _props$draggable,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 300 : _props$duration,
      _props$easing = props.easing,
      easing = _props$easing === void 0 ? 'ease' : _props$easing,
      _props$threshold = props.threshold,
      threshold = _props$threshold === void 0 ? 20 : _props$threshold,
      _props$clickDragThres = props.clickDragThreshold,
      clickDragThreshold = _props$clickDragThres === void 0 ? 10 : _props$clickDragThres,
      _props$loop = props.loop,
      loop = _props$loop === void 0 ? true : _props$loop,
      _props$rtl = props.rtl,
      rtl = _props$rtl === void 0 ? false : _props$rtl,
      _props$autoPlay = props.autoPlay,
      autoPlay = _props$autoPlay === void 0 ? props.autoplay || false : _props$autoPlay,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? props.autoplaySpeed || 4000 : _props$interval,
      _props$dots = props.dots,
      dots = _props$dots === void 0 ? props.indicators || true : _props$dots,
      onChange = props.onChange,
      children = props.children;
  var count = React.Children.count(children);
  var itemWith = "".concat(100 / count, "%");
  var wrapperRef = useRef(null);
  var innerRef = useRef(null);
  var autoPlayTimerRef = useRef(null);
  var stateRef = useRef({
    first: true,
    wrapWidth: 0,
    hover: false,
    startX: 0,
    endX: 0,
    startY: 0,
    canMove: null,
    pressDown: false
  });
  var getIndex = useCallback(function (idx) {
    return loop ? idx % count : Math.max(0, Math.min(idx, count - 1));
  }, [count, loop]);

  var _useState = useState(getIndex(startIndex)),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDragging = _useState4[0],
      setDragging = _useState4[1];

  var enableTransition = useCallback(function () {
    setTransition(innerRef.current, "transform ".concat(duration, "ms ").concat(easing));
  }, [duration, easing]);

  var disableTransition = function disableTransition() {
    setTransition(innerRef.current, 'transform 0s');
  };

  var moveX = function moveX(x) {
    setTransform(innerRef.current, "translate3d(".concat(x, "px, 0, 0)"));
  };

  var slideTo = useCallback(function (idx, smooth) {
    var nextIndex = loop ? idx + 1 : idx;
    var offset = (rtl ? 1 : -1) * nextIndex * stateRef.current.wrapWidth;

    if (smooth) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          enableTransition();
          moveX(offset);
        });
      });
    } else {
      moveX(offset);
    }
  }, [enableTransition, loop, rtl]);
  var goTo = useCallback(function (idx) {
    if (count <= 1) {
      return;
    }

    var nextIndex = getIndex(idx);

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex); // slideTo(nextIndex, loop);
    }
  }, [activeIndex, count, getIndex]);
  var prev = useCallback(function () {
    if (count <= 1) {
      return;
    }

    var nextIndex = activeIndex - 1;

    if (loop) {
      if (nextIndex < 0) {
        var state = stateRef.current;
        var moveTo = count + 1;
        var offset = (rtl ? 1 : -1) * moveTo * state.wrapWidth;
        var dragDist = draggable ? state.endX - state.startX : 0;
        disableTransition();
        moveX(offset + dragDist);
        nextIndex = count - 1;
      }
    } else {
      nextIndex = Math.max(nextIndex, 0);
    }

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex); // slideTo(nextIndex, loop);
    }
  }, [activeIndex, count, draggable, loop, rtl]);
  var next = useCallback(function () {
    if (count <= 1) {
      return;
    }

    var nextIndex = activeIndex + 1;

    if (loop) {
      var isClone = nextIndex > count - 1;

      if (isClone) {
        nextIndex = 0;
        var state = stateRef.current;
        var dragDist = draggable ? state.endX - state.startX : 0;
        disableTransition();
        moveX(dragDist);
      }
    } else {
      nextIndex = Math.min(nextIndex, count - 1);
    }

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex); // slideTo(nextIndex, loop);
    }
  }, [activeIndex, count, draggable, loop]);
  var doAutoPlay = useCallback(function () {
    if (!autoPlay || stateRef.current.hover) {
      return;
    }

    autoPlayTimerRef.current = setTimeout(function () {
      enableTransition();
      next();
    }, interval);
  }, [autoPlay, interval, enableTransition, next]);

  var clearAutoPlay = function clearAutoPlay() {
    clearTimeout(autoPlayTimerRef.current);
  };

  var resetToCurrent = function resetToCurrent() {
    slideTo(activeIndex, true);
    doAutoPlay();
  };

  var updateAfterDrag = function updateAfterDrag() {
    var state = stateRef.current;
    var offset = (rtl ? -1 : 1) * (state.endX - state.startX);
    var offsetDist = Math.abs(offset);
    var isClone1 = offset > 0 && activeIndex - 1 < 0;
    var isClone2 = offset < 0 && activeIndex + 1 > count - 1;

    if (isClone1 || isClone2) {
      if (loop) {
        if (isClone1) {
          prev();
        } else {
          next();
        }
      } else {
        resetToCurrent();
      }
    } else if (offset > 0 && offsetDist > threshold && count > 1) {
      prev();
    } else if (offset < 0 && offsetDist > threshold && count > 1) {
      next();
    } else {
      resetToCurrent();
    }
  };

  var resetDrag = function resetDrag() {
    var state = stateRef.current;
    state.startX = 0;
    state.endX = 0;
    state.startY = 0;
    state.canMove = null;
    state.pressDown = false;
  };

  var dragStart = function dragStart(e) {
    if (formElements.includes(e.target.nodeName)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    var ev = 'touches' in e ? e.touches[0] : e;
    var state = stateRef.current;
    state.pressDown = true;
    state.startX = ev.pageX;
    state.startY = ev.pageY;
    clearAutoPlay();
  };

  var dragMove = function dragMove(e) {
    e.stopPropagation();
    var ev = 'touches' in e ? e.touches[0] : e;
    var state = stateRef.current;

    if (state.pressDown) {
      if ('touches' in e) {
        if (state.canMove === null) {
          state.canMove = Math.abs(state.startY - ev.pageY) < Math.abs(state.startX - ev.pageX);
        }

        if (!state.canMove) {
          return;
        }
      }

      e.preventDefault();
      disableTransition();
      state.endX = ev.pageX;
      var nextIndex = loop ? activeIndex + 1 : activeIndex;
      var nextOffset = nextIndex * state.wrapWidth;
      var dragOffset = state.endX - state.startX;

      if (!isDragging && Math.abs(dragOffset) > clickDragThreshold) {
        setDragging(true);
      } // 阻尼
      // if ((activeIndex === 0 && dragOffset > 0) || (activeIndex === count - 1 && dragOffset < 0)) {
      //   dragOffset *= 0.35;
      // }


      var offset = rtl ? nextOffset + dragOffset : dragOffset - nextOffset;
      moveX(offset);
    }
  };

  var dragEnd = function dragEnd(e) {
    e.stopPropagation();
    var state = stateRef.current;
    state.pressDown = false;
    setDragging(false);
    enableTransition();

    if (state.endX) {
      updateAfterDrag();
    } else {
      // when clicked
      doAutoPlay();
    }

    resetDrag();
  };

  var onMouseEnter = function onMouseEnter() {
    stateRef.current.hover = true;
    clearAutoPlay();
  };

  var onMouseLeave = function onMouseLeave(e) {
    var state = stateRef.current;
    state.hover = false;

    if (state.pressDown) {
      state.pressDown = false;
      state.endX = e.pageX;
      enableTransition();
      updateAfterDrag();
      resetDrag();
    }

    doAutoPlay();
  };

  var handleClickDot = function handleClickDot(e) {
    var i = e.currentTarget.dataset.slideTo;

    if (i) {
      var idx = parseInt(i, 10);
      goTo(idx);
    }

    e.preventDefault();
  };

  useImperativeHandle(ref, function () {
    return {
      goTo: goTo,
      prev: prev,
      next: next
    };
  }, [goTo, prev, next]);
  useEffect(function () {
    // should use ResizeObserver
    function handleResize() {
      stateRef.current.wrapWidth = wrapperRef.current.offsetWidth;
      slideTo(activeIndex);
    }

    if (stateRef.current.first) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex, slideTo]);
  useEffect(function () {
    if (onChange && !stateRef.current.first) {
      onChange(activeIndex);
    }
  }, [activeIndex, onChange]);
  useEffect(function () {
    if (stateRef.current.first) {
      slideTo(activeIndex);
      stateRef.current.first = false;
    } else {
      slideTo(activeIndex, true);
    }
  }, [activeIndex, slideTo]);
  useEffect(function () {
    doAutoPlay();
    return function () {
      clearAutoPlay();
    };
  }, [autoPlay, activeIndex, doAutoPlay]);
  var events;

  if (draggable) {
    events = canTouch ? {
      onTouchStart: dragStart,
      onTouchMove: dragMove,
      onTouchEnd: dragEnd
    } : {
      onMouseDown: dragStart,
      onMouseMove: dragMove,
      onMouseUp: dragEnd,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    };
  } else {
    events = {
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    };
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx('Carousel', {
      'Carousel--draggable': draggable,
      'Carousel--rtl': rtl,
      'Carousel--dragging': isDragging
    }, className),
    ref: wrapperRef
  }, events), /*#__PURE__*/React.createElement("div", {
    className: "Carousel-inner",
    style: {
      width: "".concat(loop ? count + 2 : count, "00%")
    },
    ref: innerRef
  }, loop && /*#__PURE__*/React.createElement(CarouselItem, {
    width: itemWith
  }, React.Children.toArray(children)[count - 1]), React.Children.map(children, function (item, i) {
    return /*#__PURE__*/React.createElement(CarouselItem, {
      width: itemWith,
      key: i
    }, item);
  }), loop && /*#__PURE__*/React.createElement(CarouselItem, {
    width: itemWith
  }, React.Children.toArray(children)[0])), dots && /*#__PURE__*/React.createElement("ol", {
    className: "Carousel-dots"
  }, React.Children.map(children, function (_, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: clsx('Carousel-dot', {
        active: activeIndex === i
      }),
      type: "button",
      "aria-label": "Go to slide ".concat(i + 1),
      "data-slide-to": i,
      onClick: handleClickDot
    }));
  })));
});